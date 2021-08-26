import { injectable, postConstruct } from '@theia/core/shared/inversify';
import { ApplicationShell } from '@theia/core/lib/browser';

@injectable()
export class CustomApplicationShell extends ApplicationShell {

    @postConstruct()
    protected init(): void {
        this.topPanel.hide(); // attempt to hide the top-panel.
    }
}