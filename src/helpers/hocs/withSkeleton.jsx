import Skeleton from '../../components/Skeleton/Skeleton';

function withSkeleton(Component, type, count, direction) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} conunt={count} direction={direction} />;
    }

    return <Component {...restProps} />;
  };
}

export default withSkeleton;
