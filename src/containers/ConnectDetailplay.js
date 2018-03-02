import { connect } from "react-redux";
import { SHOW1, HIDE1 } from "../actions/showBottom";
import Detailplay from "../components/Detailplay";

const mapStateToProps = state => ({
  number: state.showBottom.numbers
});

const mapDispatchToProps = dispatch => ({
  onClickShow: () => dispatch({ type: SHOW1 }),
  onClickHide: () => dispatch({ type: HIDE1 })
});

const ConnectDetailplay = connect(mapStateToProps, mapDispatchToProps)(
  Detailplay
);

export default ConnectDetailplay;
