import { Controller, Inject, Patch } from "@nestjs/common";
import { WASMBOY_SERVICE } from "./wasmboy/wasmboy.provider";
import { WasmboyService } from "./wasmboy/wasmboy.service";

@Controller()
export class AppController {
  constructor(
    @Inject(WASMBOY_SERVICE) private wasmboyService: WasmboyService,
  ) {}

  @Patch()
  update() {
    this.wasmboyService.executeFrames(16);
    return this.wasmboyService.saveState();
  }
}
