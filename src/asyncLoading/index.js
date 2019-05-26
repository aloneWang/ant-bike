import Loadable from 'react-loadable';
import Loading from '@/components/loading'

export const Login = Loadable({
  loader: ()=> import('@/views/login'),
  loading: Loading
})