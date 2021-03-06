import { connect } from "react-redux";
import { SHOW1, HIDE1 } from "../actions/showBottom";
import Mymusiclist from "../components/Mymusiclist";

const mapStateToProps = state => ({
  number: state.showBottom.number
});

const mapDispatchToProps = dispatch => ({
  onClickShow: () => dispatch({ type: SHOW1 }),
  onClickHide: () => dispatch({ type: HIDE1 })
});

const ConnectMymusiclist = connect(mapStateToProps, mapDispatchToProps)(
  Mymusiclist
);

export default ConnectMymusiclist;
