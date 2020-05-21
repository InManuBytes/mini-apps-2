import { connect } from 'react-redux';
import Board from '../components/Board';

const mapStateToProps = (state) => {
  return { board: state.currentBoard };
};

// const mapDispatchToProps = (dispatch) => {
// INSERT HANDLERS HERE
// }

const BoardContainer = connect(mapStateToProps)(Board);

export default BoardContainer;
