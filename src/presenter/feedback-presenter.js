import { render, RenderPosition } from '../utils/render';
import FeedbackView from '../view/feedback-view';

export default class FeedbackPresenter {
  #mainContainer = null;
  #feedbackComponent = new FeedbackView();

  constructor(mainContainer) {
    this.#mainContainer = mainContainer;
  }

  init = () => {
    this.#renderFeedback();
  };

  #renderFeedback = () => {
    render(this.#feedbackComponent, this.#mainContainer, RenderPosition.BEFOREEND);
  };
}
