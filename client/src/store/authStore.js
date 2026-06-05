import { create } from 'zustand'
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/api' })

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,

  register: async (data) => {
    set({ loading: true, error: null })
    try {
      const res = await API.post('/auth/register', data)
      localStorage.setItem('token', res.data.token)
      set({ user: res.data.user, token: res.data.token, loading: false })
    } catch (err) {
      set({ error: err.response?.data?.error, loading: false })
    }
  },

  login: async (data) => {
    set({ loading: true, error: null })
    try {
      const res = await API.post('/auth/login', data)
      localStorage.setItem('token', res.data.token)
      set({ user: res.data.user, token: res.data.token, loading: false })
    } catch (err) {
      set({ error: err.response?.data?.error, loading: false })
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, token: null })
  }
}))

export default useAuthStore