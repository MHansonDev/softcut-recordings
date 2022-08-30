import { PipeTransform, Pipe } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
    name: "sanitizeEmbed"
})
export class SanitizeEmbedPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(embed: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustResourceUrl(embed);
    }
}

@Pipe({
    name: "sanitizeEmbedHTML"
})
export class SanitizeEmbedHTMLPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(embed: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(embed);
    }
}