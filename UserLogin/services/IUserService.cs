using UserLogin.Models;

namespace UserLogin.services;

public interface IUserService
{
    Task<IEnumerable<User>> sendingHeadphones();
    Task<IEnumerable<User>> sendingHeadphones1();
}