import { useMutation, useQuery } from '@tanstack/react-query';
import { getMe, login, LoginPayload, logOut, forgetPassword, forgetPasswordPayload, resetPassword, resetPasswordPayload, signUp, SignUpPayload, getUserByToken, updatePassword, UpdatePasswordPayload } from '@/lib/api/auth';

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginPayload) => login(data),
  });
}

export function useMe() {
  return useQuery({
    queryKey: ['me'],
    queryFn: () => getMe(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useUserByToken(){
  return useQuery({
    queryKey:['user-by-token'],
    queryFn:() => getUserByToken(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export  function useLogout() {
  return useMutation({
    mutationFn: () => logOut(),
  });
}


export function useForgetPassword() {
  return useMutation({
    mutationFn:(data: forgetPasswordPayload) => forgetPassword(data)
  })
}


export function useResetPassword() {
  return useMutation({
    mutationFn: (data:resetPasswordPayload ) => resetPassword(data),
  });
}

export function useSignup(){
  return useMutation({
    mutationFn: (data: SignUpPayload) => signUp(data),
  })
}

export function useChangePassword(){
  return useMutation({
    mutationFn: (data: UpdatePasswordPayload) => updatePassword(data),
  })
}

// export function useGetUserByToken() {
//   return useMutation({
//     mutationFn: () => getUserByToken()
//   })
// }

