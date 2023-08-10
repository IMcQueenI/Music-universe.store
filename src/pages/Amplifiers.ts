import TemplateView from './TemplateView';
import './Amplifiers.scss';

export default class Amplifiers extends TemplateView {
  constructor() {
    super();
    this.setTitle('Amplifiers');
  }

  public async getHtml(): Promise<string> {
    return `<div class="amplifiers">This is Amplifiers page</div>`;
  }

  public setTitle(title: string): void {
    document.title = title;
  }
}
