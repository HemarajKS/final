import './snackBar.css';

const SnackBar = (props: JSX.Element | any) => {
  return (
    <div className="snackBar">
      <div className="snackBarMsg">{props.message}</div>
      <div className="snackBarClose">x</div>
    </div>
  );
};

export default SnackBar;
