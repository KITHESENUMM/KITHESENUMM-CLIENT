import { useMutation } from '@tanstack/react-query';
import { joinAxios } from '../apis/joinAxios';
import { JoinRequesetType } from '../type';

const useJoinQuery = () => {
  const mutation = useMutation({
    mutationFn: (requestBody: JoinRequesetType) => joinAxios(requestBody),
    onSuccess: (data) => {
      localStorage.setItem('role', data.data.userType);
    },
    onError: (error) => {
      console.log('join patch Error: ', error);
    },
  });

  return mutation;
};

export default useJoinQuery;
