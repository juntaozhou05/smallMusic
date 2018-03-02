import { connect } from "react-redux";
import { SHOW1, HIDE1 } from "../actions/showBottom";
import Bottomlist from "../components/Bottomlist";

const mapStateToProps = state => ({
  number: state.showBottom.numbers
});

const mapDispatchToProps = dispatch => ({
  onClickShow: () => dispatch({ type: SHOW1 }),
  onClickHide: () => dispatch({ type: HIDE1 })
});

const ConnectBottomlist = connect(mapStateToProps, mapDispatchToProps)(
  Bottomlist
);

export default ConnectBottomlist;
