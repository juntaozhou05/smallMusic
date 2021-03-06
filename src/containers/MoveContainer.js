import { connect } from "react-redux";
import { LEFT, HIDE } from "../actions/showBar";
import Sidebar from "../components/Sidebar";

const mapStateToProps = state => ({
  number: state.showBar.number
});

const mapDispatchToProps = dispatch => ({
  onClickShow: () => dispatch({ type: LEFT }),
  onClickHide: () => dispatch({ type: HIDE })
});

const MoveContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default MoveContainer;
