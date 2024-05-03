class Services {

  async get<T>(url: string): Promise<T | undefined> {
    try {
      const data: Response = await fetch(url);
      if (data.ok) {
        return data.json() as Promise<T>;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Services();