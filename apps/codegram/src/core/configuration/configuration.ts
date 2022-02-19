import {CustomTheme} from '@codegram/theme';
import {Component} from 'solid-js';
import {BaseTerminalProps} from '../../components/Terminal/TerminalHost';

interface TerminalDefinition<T> {
  name: T;
  component: Component<BaseTerminalProps>;
}

type TerminalDefinitionMap<T extends string> = {
  keys: readonly [...T[]];
  entries: Record<T, TerminalDefinition<string>>;
};

// TODO: create helper fn
export interface AppStaticConfiguration {
  themes: CustomTheme[];
  terminalThemes: TerminalDefinitionMap<string>;
}