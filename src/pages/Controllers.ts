import TemplateView from './TemplateView';
import './Controllers.scss';

export default class Controllers extends TemplateView {
  constructor() {
    super();
    this.setTitle('Controllers');
  }

  public async getHtml(): Promise<string> {
    return `<div class="controllers">This is Controllers page</div>`;
  }

  public setTitle(title: string): void {
    document.title = title;
  }
}
