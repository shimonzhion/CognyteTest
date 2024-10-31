/**
Singleton  is a design pattern that is making sure a class has only one instance 
and provides a global access point to it through a static method,
which allows any part of the application to get the same instance.
This is useful for managing any resources that need to be accessed and managed by multiple parts 
of an application, like in my example every API call in the application uses the same single instance 
so the base URL and the token remain consistent without needing to be redefined each time. 
*/

//*day to day exsample:
/*
when living with roomates we all use the same whashing machine (this is the singal instance)
when we need to wash our clothes instead of each one will buy their own washing machine and use it on his one.
,we all use the same one when we need.
This saves space, money, and electricity, much like how a Singleton saves resources by having only one instance rather than creating multiple ones.
*/

  class ApiService {
    static #instance = null;
    #baseUrl;
    #token;
    constructor() {
      if (ApiService.#instance) {
        return ApiService.#instance;
      }
  
      this.#baseUrl = "http://localhost:8090";
      ApiService.#instance = this;
    }
  
    setToken(token) {
      if (!token) throw new Error("token is required");
      this.#token = token;
    }
  
    getToken() {
      return this.#token;
    }
  
    setBaseUrl(url) {
      if (!url) throw new Error("base URL is required");
      this.#baseUrl = url;
    }
  
    async fetchData(endpoint) {
      try {
        const response = await fetch(`${this.#baseUrl}/${endpoint}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.#token}`,
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`error: ${response.status} - ${response.statusText}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error("error :", error);
        throw error;
      }
    }
  }
  
  const apiServiceInstance = new ApiService();
  export default apiServiceInstance;
  
