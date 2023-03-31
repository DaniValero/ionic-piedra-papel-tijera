import { renderHook, act } from '@testing-library/react-hooks';
import MatchController from './MatchController';

describe('MatchController', () => {
  it('should set player turn and computer turn when component is mounted', () => {
    const { result } = renderHook(() => MatchController());
    const [playerTurn, computerTurn] = result.current;

    expect(playerTurn).toBeDefined();
    expect(computerTurn).toBeDefined();
  });

  it('should set player and computer values after 2 and 4 seconds', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => MatchController());

    act(() => {
      result.current.handleGame();
      jest.advanceTimersByTime(4000);
    });

    const [player, computer] = result.current;

    expect(player).toBeDefined();
    expect(computer).toBeDefined();
  });

  it('should set winner and save match data when handleWinner is called', () => {
    const { result } = renderHook(() => MatchController());

    act(() => {
      result.current.setPlayer('Rock');
      result.current.setComputer('Scissors');
      result.current.handleWinner();
    });

    const [winner] = result.current;

    expect(winner).toBeDefined();
    expect(result.current.saveMatchData).toHaveBeenCalled();
  });

  it('should reset values when handleReset is called', () => {
    const { result } = renderHook(() => MatchController());

    act(() => {
      result.current.setPlayer('Rock');
      result.current.setComputer('Scissors');
      result.current.handleReset();
    });

    const [player, computer, winner] = result.current;

    expect(player).toBe('');
    expect(computer).toBe('');
    expect(winner).toBe('');
  });
});
