import { procedure, router } from '~~/server/api';
import { reboot } from '~~/server/system/command';
import { downloadLatestOtaAsset, fetchLatestOtaRelease } from '~~/server/system/ota';

export const system = router({
	reboot: procedure.mutation(() => reboot()),
	latestOtaRelease: procedure.query(() => fetchLatestOtaRelease()),
	downloadLatestOtaAsset: procedure.mutation(() => downloadLatestOtaAsset()),
});
