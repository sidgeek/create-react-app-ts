import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingSpinner = () => <CircularProgress />;

interface WithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => ({
  loading,
  ...props
}: WithLoadingProps) =>
  loading ? <LoadingSpinner /> : <Component {...props as P} />;

export default withLoading;

// const withLoading = Loading => WapperedComponent => {
//   const WithLoading = props => {
//     return props.data.length === 0 ? (
//       <Loading />
//     ) : (
//       <WapperedComponent {...props} />
//     );
//   };
//   return WithLoading;
// };

// const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
//   class WithLoading extends React.Component<P & WithLoadingProps> {
//     render() {
//       const { loading, ...props } = this.props;
//       return loading ? <LoadingSpinner /> : <Component {...props as P} />;
//     }
//   };
