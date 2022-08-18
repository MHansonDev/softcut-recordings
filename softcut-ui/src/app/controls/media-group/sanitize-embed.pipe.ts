import { PipeTransform, Pipe } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
    name: "sanitizeEmbed"
})
export class SanitizeEmbedPipe implements PipeTransform {

    constructor(private _sanitizer: DomSanitizer) { }

    transform(embed: string): SafeHtml {
        return this._sanitizer.bypassSecurityTrustResourceUrl(embed);
    }
}