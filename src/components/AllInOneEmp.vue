<template>
  <v-container>
    <h1>Employee Management</h1>
    <p>This UI Developed to handle Employee Registration.</p>
    <v-row>
      <v-col xs="12" sm="12" md="6">
        <v-alert v-if="responseSuccess" dense text type="success" id="textAlert">
          {{ isEditing ? "You have successfully added Employee" : "Successfully updated Employee" }}
        </v-alert>
        <h3>Employee Registration</h3>
        <v-text-field
          prepend-icon="mdi-identifier"
          v-model="userRegistration.id"
          label="Employee ID"
          readonly="true"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-account-box"
          v-model="userRegistration.empName"
          label="Employee Name"
        >
        </v-text-field>
        <v-text-field
          prepend-icon="mdi-account"
          v-model="userRegistration.username"
          label="Username"
        >
        </v-text-field>
        <v-text-field
          prepend-icon="mdi-form-textbox-password"
          v-model="userRegistration.password"
          label="Password"
          type="password"
        >
        </v-text-field>
        <v-text-field
          prepend-icon="mdi-image"
          v-model="userRegistration.photos"
          label="Photos"
        >
        </v-text-field>
        <v-select
          prepend-icon="mdi-security"
          v-model="userRegistration.role"
          label="Role"
          :items="['USER', 'ADMIN', 'EDITOR']"
          outlined
        >
        </v-select>
        <v-btn color="success" v-on:click="createEmployee">
          {{ isEditing ? "Update" : "Save" }}
        </v-btn>
      </v-col>
      <v-col xs="12" sm="12" md="6">
        <h3>List Employee</h3>
        <v-data-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Employee ID</th>
                <th class="text-left">Employee Name</th>
                <th class="text-left">Username</th>
                <th class="text-left">Password</th>
                <th class="text-left">Photos</th>
                <th class="text-left">Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="emp in listEmp" :key="emp.username">
                <td> {{ emp.id }} </td>
                <td>{{ emp.empName }}</td>
                <td>{{ emp.username }}</td>
                <td>password</td>
                <td>{{ emp.photos }}</td>
                <td>{{ emp.role }}</td>
                <td>
                  <v-btn
                    variant="outlined"
                    prepend-icon="mdi-text-box-edit-outline"
                    v-on:click="updateEmployee(emp)"
                  >
                    Edit
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    variant="outlined"
                    prepend-icon="mdi-delete-circle-outline"
                    v-on:click="deleteEmployee(emp.id)"
                  >
                    Delete
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import EmployeeService from "@/service/EmployeeService";
export default {
  name: "AllInOneEmp",
  data() {
    return {
      userRegistration: {
        id: "",
        username: "",
        empName: "",
        password: "",
        photos: "",
        role: "",
      },
      listEmp: [],
      responseSuccess: false,
      isEditing: false,
    };
  },
  methods: {
  async getEmployees() {
    const data = await EmployeeService.getAllEmployee();
    this.listEmp = data.data.listEmp;
  },
  
  async createEmployee() {
    const employeeRequest = {
      username: this.userRegistration.username,
      empName: this.userRegistration.empName,
      password: this.userRegistration.password,
      photos: this.userRegistration.photos,
      role: this.userRegistration.role,
    };
    
    this.responseSuccess = false;

    if (this.isEditing) {
      const response = await EmployeeService.updateEmployee(this.userRegistration.id, {
        id: this.userRegistration.id,
        ...employeeRequest
      });
      
      this.isEditing = false;
    } else {
      const response = await EmployeeService.createEmployee(employeeRequest);
    }

    this.resetForm();
    await this.getEmployees();
    this.responseSuccess = true;
  },
  
  updateEmployee(emp) {
    this.responseSuccess = false
    this.userRegistration = { ...emp };
    this.isEditing = true;
  },
  
  async deleteEmployee(id) {
    if (confirm("Delete account " + id)) {
      const response = await EmployeeService.deleteEmployee(id);
      console.log(response);
      await this.getEmployees();
    }
  },

  resetForm() {
    this.userRegistration = {
      id: "",
      username: "",
      empName: "",
      password: "",
      photos: "",
      role: "",
    };
  }
},
  mounted() {
    this.getEmployees();
  },
};
</script>