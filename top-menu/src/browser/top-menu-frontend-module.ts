import { ApplicationShell } from '@theia/core/lib/browser';
import { ContainerModule } from '@theia/core/shared/inversify';
import { CustomApplicationShell } from './custom-application-shell';

export default new ContainerModule((bind, unbind, isBound, rebind) => {
    bind(CustomApplicationShell).toSelf().inSingletonScope();
    rebind(ApplicationShell).to(CustomApplicationShell).inSingletonScope();
});
