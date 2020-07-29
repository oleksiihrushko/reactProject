import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance.goit.co.ua/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const login = (credentials) => axios.post('/auth/login', credentials);

const logout = () => axios.post('/auth/logout');

const register = (credentials) => axios.post('/auth/register', credentials);

const getTransactions = () => axios.get('/transactions');

const getBalance = () => axios.get('/balance');

const addBalance = (balance) => axios.post('/balance', balance);

const addIncome = (income) => axios.post('/income', income);

const deleteIncome = (id) => axios.delete(`/income/${id}`);

const addCosts = (costs) => axios.post('/costs', costs);

const getCosts = (date) => axios.get('/costs', date);

const deleteCosts = (data) => axios.delete('/costs', data);

const getCategories = () => axios.get('/categories');

const addCategories = (category) => axios.post('/categories', category);

const deleteCategory = (id) => axios.delete(`/categories/${id}`);

const patchCategory = (id, category) => axios.patch(`/categories/${id}`);

export default {
  token,
  login,
  logout,
  register,
  getTransactions,
  getBalance,
  addBalance,
  addIncome,
  deleteIncome,
  addCosts,
  getCosts,
  deleteCosts,
  getCategories,
  addCategories,
  deleteCategory,
  patchCategory,
};
