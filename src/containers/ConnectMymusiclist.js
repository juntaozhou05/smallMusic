import { connect } from "react-redux";
import { SHOW, HIDE } from "../actions/showBottom";
import Bottomlist from "../components/Bottomlist";

const mapStateToProps = state => ({
  number: state.showBottom.number
});

const mapDispatchToProps = dispatch => ({
  onClickShow: () => dispatch({ type: SHOW }),
  onClickHide: () => dispatch({ type: HIDE })
});

const ConnectMymusiclist = connect(mapStateToProps, mapDispatchToProps)(
  Bottomlist
);

export default ConnectMymusiclist;
