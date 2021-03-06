import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MaskedPasswordChar} from "./masked-password.model";
import {MASKED_CHARS_LENGTH} from "./masked-password.constants";

@Component({
  selector: 'bd-masked-password',
  templateUrl: './masked-password.component.html',
  styleUrls: ['./masked-password.component.scss']
})
export class MaskedPasswordComponent {

  @Output() password: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Input()
  set enabledIndexes(indexes: number[]) {
    this.chars = this.createChars(indexes, MASKED_CHARS_LENGTH);
  }

  public chars: MaskedPasswordChar[];

  private createChars(enabledIndexes: number[], passwordLength: number): MaskedPasswordChar[] {
    const chars: MaskedPasswordChar[] = [];
    for (let counter = 0; counter < passwordLength; counter++) {
      const isCharInRandomIndex: boolean = enabledIndexes.includes(counter)
      chars.push({disabled: !isCharInRandomIndex, value: isCharInRandomIndex ? "" : "x"})
    }
    return chars;
  }

  private goToInputSibling(next: boolean, target: HTMLInputElement): void {
    const siblingKey: string = next ? "nextSibling" : "previousSibling";
    let nextEnabledSibling: ChildNode = target[siblingKey];
    if (nextEnabledSibling) {
      while ((nextEnabledSibling as HTMLInputElement)?.disabled) {
        if (!nextEnabledSibling) {
          break;
        }
        nextEnabledSibling = nextEnabledSibling[siblingKey];
      }
      if ((nextEnabledSibling as HTMLInputElement)?.focus) {
        (nextEnabledSibling as HTMLInputElement).focus();
      }
    }
  }

  onKeyUp(event: KeyboardEvent) {
    this.password.emit(this.chars.filter(char => !char.disabled).map(char => char.value));
    if (event.key === "ArrowLeft") {
      this.goToInputSibling(false, event.target as HTMLInputElement);
    } else if (event.key === "ArrowRight" || (event.target as HTMLInputElement).value.length > 0) {
      this.goToInputSibling(true, event.target as HTMLInputElement);
    }
  }

  trackBy(index: number): number {
    return index;
  }

}
