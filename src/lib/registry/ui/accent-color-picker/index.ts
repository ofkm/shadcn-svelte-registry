import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
import Root from './accent-color-picker.svelte';
import Item from './accent-color-item.svelte';
import CustomDialog from './accent-color-custom-dialog.svelte';

const RadioRoot = RadioGroupPrimitive.Root;
const RadioItem = RadioGroupPrimitive.Item;

export {
  Root,
  Item,
  CustomDialog,
  RadioRoot,
  RadioItem,
  //
  Root as AccentColorPicker,
  Item as AccentColorItem,
  CustomDialog as AccentColorCustomDialog,
};

export type { AccentColorPickerProps } from './accent-color-picker.svelte';
export type { AccentColorItemProps } from './accent-color-item.svelte';
export type { AccentColorCustomDialogProps } from './accent-color-custom-dialog.svelte';
