import { ref, Ref } from "vue";
import { Dark } from "quasar";

interface ImodeOption {
  label: string,
  value: boolean|"auto"
}

export const modeOptions: ImodeOption[] = [
  { label: "Escuro", value: true },
  { label: "Claro", value: false },
  { label: "Padrão do sistema", value: "auto" },
];

export const darkMode: Ref<boolean|"auto"> = ref("auto")

export function setDarkMode(value: boolean|"auto"): void {
  darkMode.value = value
  Dark.set(value)
}

export function switchDarkMode(): void {
  darkMode.value = !darkMode.value
  Dark.toggle()
}