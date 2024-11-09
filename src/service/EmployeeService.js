import axios from "axios"

const EmployeeService = {

  async getAllEmployee() {
    const response = await axios.get("/admin/get-all-employee")
    return response
  },

  async getEmployee(id) {
    const response = await axios.get("/admin/get-employee/" + id)
    return response.data
  },

  async deleteEmployee(id) {
    const response = await axios.delete("/admin/delete-employee/" + id)
    return response.data
  },

  async updateEmployee(id, employee) {
    console.log(employee);
    const response = await axios.put("/admin/update-employee/" + id, employee)
    return response.data
  },

  async createEmployee(employee) {
    const response = await axios.post("/auth/register", employee)
    return response.data
  }
}

export default EmployeeService;