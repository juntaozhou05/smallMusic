import { connect } from "react-redux";
import { LEFT, HIDE } from "../actions/showBar";
import Header from "../components/Header/index.js";

const mapStateToProps = state => ({
  number: state.showBar.number
});

const mapDispatchToProps = dispatch => ({
  onClickShow: () => dispatch({ type: LEFT }),
  onClickHide: () => dispatch({ type: HIDE })
});

const HeaderMove = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderMove;
