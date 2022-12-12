//componets
import SkeletonLoader from '../components/SkeletonLoader';

const SkeletonLoaderList = () => {
  const loaders = [];

  for (let i; i <= 20; i++) {
    loaders.push(<div>{<SkeletonLoader />}</div>);
  }

  return (
    <div>
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>
  );
};

export default SkeletonLoaderList;
