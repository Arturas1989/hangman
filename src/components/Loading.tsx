import Spinner from '../assets/Spinner@1x-1.0s-200px-200px.gif'

type LoadingProps = {
  name?: string;
};

export const Loading = ({ name }: LoadingProps) => {
  return (
    <img className='spinner' src={Spinner} alt='Spinner'/>
  )
};
