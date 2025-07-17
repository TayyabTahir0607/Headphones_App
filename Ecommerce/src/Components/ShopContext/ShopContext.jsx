import { createContext, useEffect, useState } from "react"
export const shopContext = createContext();
const ShopContextProvider = ({ children }) => {

   
    const [subtotal, setSubtotal] = useState(0);
   
    const [itemQty, setItemQty] = useState([])
    const [contactCard, toggleContactCard] = useState(false);
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [showProdDetails, setProdDetails] = useState(false)
    const [addMultipleItems, setMultipleItems] = useState(1);
    const [showForm,setShowForm]=useState(false);
    const [validLogin,setValidlogin]=useState(true);
    const [showSignup,setShowSignup]=useState(false)
    const [showSignupCard, setShowSignupCard]=useState(false);
    const [successfullySignup,setSuccessfullySignup]=useState(true);
    const [showLoginCard, setShowLoginCard]=useState(false);
    const [currentUser,setCurrentUser]=useState(0);
    const [showLogout,setShowLogout]=useState(false);

    const [cartItems, setCartItems] = useState([]);


useEffect(() => {
  const loadCartItems = async (userId) => {
    try {
      const response = await fetch(`https://localhost:7094/api/UserLogin/LoadCart?userId=${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Error:", errText);
        return;
      }

      const data = await response.json();

      const result = data.map((curr) => {
        const product = products.find(p => p.id == curr.headphoneId);
        if (product) {
          return {
            ...product,
            quantity: curr.quantity
          };
          
        }
        return null;
      }).filter(item => item !== null);
      setItemQty(result.map(item => item.quantity));  
     
      setCartItems(result);
   

      const total = result.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setSubtotal(total);
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  if (products.length > 0 && currentUser !== 0) {
    loadCartItems(currentUser);
  }
}, [currentUser]);


    useEffect(() => {
        const fetchHeadphones = async () => {
          try {
            const response = await fetch("https://localhost:7094/api/Headphones/sendingHeadphones");
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error("Failed to fetch headphones:", error);
          }
        };
    
        fetchHeadphones();
      }, []);
    

      const sendCartItems= async(UId,HId,qty)=>{
        const payload={UserId:UId,HeadphoneId:HId,Quantity:parseInt( qty)}
        try{
        const response = await fetch("https://localhost:7094/api/UserLogin/settingUsersCart", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          });
          if (!response.ok) {
            const errText = await response.text();
            console.error("Server error:", errText);
            return;
          }
      
          const data = await response.text(); 
          console.log("ADDED:", data);
      
        } catch (error) {
          console.error("Network error:", error);
        }
      }

      const onclickLogout=()=>{
        setShowLogout(true)
        const timer=setTimeout(()=>{
            setShowLogout(false);
        },3000)
        setCartItems([]);
        setSubtotal(0);
        setItemQty(()=>{
            let newItemQty=[...itemQty];
            newItemQty.map((qty,i)=>{
                newItemQty[i]=1;
            })
            return newItemQty;
        });
        return () => clearTimeout(timer);
      }
    const onclickSignupDone=()=>{
        setShowSignupCard(true);
        const timer = setTimeout(() => {
            setShowSignupCard(false);
        }, 3000);
        

        return () => clearTimeout(timer);
    }
    const onclickLoginDone=()=>{
       
        const timer = setTimeout(() => {
            setShowLoginCard(false);
        }, 2000);
        setShowLoginCard(true);
        return () => clearTimeout(timer);
    }
    
    const onclickSignup=()=>{
        setShowSignup(true)
        setShowForm(false);
        setValidlogin(true);
    }
    const onclickSignupCross=()=>{
        setShowForm(false);
        setShowSignup(false);
    }

  
    const toggleShowForm=()=>{
        setShowForm(!showForm);
    }

    const onClickAddMultipleItems = () => {
       
        setMultipleItems(addMultipleItems + 1);
    }
    const onClickSubMultipleItems = () => {
        if (addMultipleItems > 1)
            setMultipleItems(addMultipleItems - 1);
    }
    const onClickAddMultiple = (prod) => {
        if(currentUser==0){
          setShowForm(true);
            return;
        }
  setCartItems((cartItems )=> {
    const index = getIndex(cartItems,prod );
    let updatedCart;

    if (index !== -1) {
      updatedCart = [...cartItems];
    } else {
      updatedCart = [...cartItems, prod];
    }

    setSubtotal(prevSubtotal => prevSubtotal + prod.price * addMultipleItems);

    setItemQty(prevQty => {
        const newQty = [...prevQty];
        const newIndex = updatedCart.findIndex(item => item.id === prod.id);
      
        if (newIndex === -1) {
          newQty.push(addMultipleItems);
        } else {
          newQty[newIndex] = (newQty[newIndex] || 0) + (addMultipleItems - 1);
        }
      
        return newQty;
      });
   
    return updatedCart;
    
  });
 
  sendCartItems(currentUser,prod.id,addMultipleItems);
  setMultipleItems(1);
  onClickAdd()
  
};


    function getIndex(array, item) {

        return array.findIndex(p => p.id === item.id);
    }


    const removeItemAtIndex = (array, indexToRemove) => {
        return [
            ...array.slice(0, indexToRemove),
            ...array.slice(indexToRemove + 1)
        ];
    };


    const onClickCart = (item) => {

      if(currentUser==0){
        setShowForm(true);
        return;
      }
        products.map((product) => {
            if(currentUser==0){
               
                return;
            }
          
            if (product.id == item.id) {
                const alreadyExists = getIndex(cartItems, item)
                if (alreadyExists === -1) {
                    setCartItems(prev => [...prev, product])
                    calcSubtotal(product);
                    setItemQty([...itemQty,1])
                    onClickAdd();
                    sendCartItems(currentUser,product.id,1)
                } else {

                   let qty= onClickPlus(item)
                    onClickAdd();
                    sendCartItems(currentUser,product.id,qty[alreadyExists])
                    
                }
            }
        })
    }

    const onClickPlus = (itemm) => {

        const index = getIndex(cartItems, itemm)
        setSubtotal(subtotal + cartItems[index]?.price)
        const counting = [...itemQty];
        counting[index]++;
        setItemQty(counting)
        return counting;
    }

    const onClickTrash = () => {
        fetch(`https://localhost:7094/api/Headphones/emptyCart?userId=${currentUser}`,{
            method:'DELETE'
        })
        setCartItems([]);
        setSubtotal(0);
        setItemQty(()=>{
            let newItemQty=[...itemQty];
            newItemQty.map((qty,i)=>{
                newItemQty[i]=1;
            })
            return newItemQty;
        });
    }


   


    const onClickMinus = (itemm) => {

        const index = getIndex(cartItems, itemm)
        if (itemQty[index] === 1) {
            onClickRemove(itemm)
        } else {
            setSubtotal(subtotal - cartItems[index]?.price)
            const counting = [...itemQty];
            counting[index]--;
            setItemQty(counting)
            return counting;
        }
    }


    const calcSubtotal = (item) => {

        setSubtotal(subtotal + item?.price)
    }


    const updatingQty = (item) => {
        const index = getIndex(cartItems, item)
        setSubtotal(subtotal - (item.price * itemQty[index]))
        const newcount = [...itemQty];
        const result = removeItemAtIndex(newcount, index)
        setItemQty(result);
    }


    const onClickRemove = (item) => {
        const newArr = cartItems.filter((findItem) => (
            findItem.id !== item.id
        ));

        updatingQty(item)
        setCartItems(newArr);

    };



    const onClickContact = () => {
        toggleContactCard(!contactCard);
    }


    const onClickInfoCross = () => {

        toggleContactCard(false);
    }


    const onClickAdd = () => {

        setShow(true);
        const timer = setTimeout(() => {
            setShow(false);
        }, 1100);

        return () => clearTimeout(timer);

    }

    const [seletedProduct, setSelectedProduct] = useState(null)
    const onClickShowDetails = (product) => {
        setProdDetails(!showProdDetails)
        setSelectedProduct(product)
    }

    const onClickCrossProdDetail = () => {
        setMultipleItems(1);
        setProdDetails(!showProdDetails)
    }
    return (<>
        <shopContext.Provider value={{
            products, cartItems, onClickCart, onClickTrash, subtotal, onClickRemove,
            onClickPlus, itemQty, onClickContact, contactCard, onClickInfoCross, onClickMinus, onClickAdd, show, onClickShowDetails,
            showProdDetails, seletedProduct, onClickCrossProdDetail, onClickAddMultipleItems, addMultipleItems, onClickSubMultipleItems,
            onClickAddMultiple,showForm,toggleShowForm,validLogin,onclickSignup,showSignup,onclickSignupCross,onclickSignupDone,showSignupCard,successfullySignup
            ,setSuccessfullySignup,setValidlogin,showLoginCard,onclickLoginDone,setCurrentUser,sendCartItems,currentUser,showLogout,onclickLogout,setProdDetails,setShowSignup,
            setShowForm
        }}>
            {children}
        </shopContext.Provider>
    </>)
}
export default ShopContextProvider;