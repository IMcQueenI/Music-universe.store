import TemplateView from './TemplateView';
import './Headphones.scss';

export default class Headphones extends TemplateView {
  constructor() {
    super();
    this.setTitle('Headphones');
  }

  public async getHtml(): Promise<string> {
    return `<div class="headphones">This is headphones page</div>`;
  }

  public setTitle(title: string): void {
    document.title = title;
  }
}
