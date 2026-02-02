"use client";

import axiosClient from './axios-client';
import { useUserStore } from '../stores/userStore';

// Types 
export interface LoginPayload {
  email: string;
  password: string;
}

export interface forgetPasswordPayload {
  email: string;
}

export interface resetPasswordPayload {
  otp: string;
  newPassword: string;
}


export interface SignUpPayload {
  email: string;
  password: string;
  name: string;
  role: string;
  accountNumber: string;
  passwordConfirm: string;
  redeemPoints: string;
}

export interface UpdatePasswordPayload {
  oldPassword: string;
  newPassword: string;
} 

//Functions
export async function login(payload: LoginPayload) {
  try {
    const response = await axiosClient.post('/auth/login', payload);
    return response.data;
    useUserStore.getState().setUser(response.data);

  } catch (error: any) {
    // Throw the backend error message so React Query can catch it
    throw error?.response?.data || { message: "Login failed" };
  }
}

export async function signUp(payload: SignUpPayload) {
  try {
    const response = await axiosClient.post('/auth/signup', payload);
    return response.data;

  } catch (error: any) {
    // Throw the backend error message so React Query can catch it
    throw error?.response?.data || { message: "Signup failed" };
  }
}

export async function getMe() {
  try {
    const response = await axiosClient.get('/auth/me');
    console.log('getMe success:', response.data);

    // Store user data in Zustand
    useUserStore.getState().setUser(response.data);

    return response.data;
  } catch (error: any) {
    console.error('getMe error:', error.response?.data);
    console.error('Status:', error.response?.status);
    console.error('Headers:', error.response?.headers);

    // Clear user on error
    useUserStore.getState().clearUser();

    throw error;
  }
}

export async function logOut() {
  try {
    const response = await axiosClient.get('/auth/logout');
    useUserStore.getState().clearUser();
    return response.data.message;
  } catch (error: any) {
    return error?.response?.data;
  }
}


export async function forgetPassword(payload: forgetPasswordPayload) {
  const response = await axiosClient.post(
    '/auth/forgot-password',
    payload,
  );
  return response.data;
}

export async function resetPassword(payload: resetPasswordPayload) {
  try {
    const response = await axiosClient.post('/auth/reset-password', payload);
    return response.data;
  } catch (error: any) {
    return error?.response?.data;
  }
}

export async function getUserByToken() {
  try {
    const response = await axiosClient.get('/api/user');
    console.log('get by  success:', response.data);


    return response.data;
  } catch (error: any) {
    // useUserStore.getState().clearUser();

    return error.response?.data
  }
}

export async function updatePassword(payload:UpdatePasswordPayload ) {
  try {
    const response = await axiosClient.put('/auth/change-password', payload);
    return response.data;
  } catch (error: any) {
    return error?.response?.data;
  }
}