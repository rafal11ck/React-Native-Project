import { MD3Colors, MD3Theme } from 'react-native-paper/lib/typescript/types';
import { StyleSheet } from 'react-native';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppTabParamList {}
    }
}

export type HomeStackParamList = {
    Home: { snackbarContent: string } | undefined;
    Workout:
        | {
              editMode: boolean;
              workout: Workout;
          }
        | undefined;
    Settings: undefined;
    Exercises: { mode: 'select' | 'view' } | undefined;
    'Workout Details': { workout: Workout } | undefined;
};

export type ExecisesStackParamList = {
    Debug: { exercises: PredefinedExercise[] } | undefined;
    Exercises: { mode: 'select' | 'view' } | undefined;
    Settings: undefined;
};

export type ProfileStackParamList = {
    Profile: undefined;
    Settings: undefined;
    Calendar: undefined;
};

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

export type AppTabParamList = {
    HomeTab: NavigatorScreenParams<HomeStackParamList>;
    ExercisesTab: NavigatorScreenParams<ExecisesStackParamList>;
    ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

export type HomeTabScreenProps<ScreenName extends keyof HomeStackParamList> = CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, ScreenName>,
    BottomTabScreenProps<AppTabParamList, 'HomeTab'>
>;

export type ProfileTabScreenProps<ScreenName extends keyof ProfileStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<ProfileStackParamList, ScreenName>,
        BottomTabScreenProps<AppTabParamList, 'ProfileTab'>
    >;

export type ExercisesTabScreenProps<ScreenName extends keyof ExecisesStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<ExecisesStackParamList, ScreenName>,
        BottomTabScreenProps<AppTabParamList, 'ExercisesTab'>
    >;

export type AuthStackScreenProps<ScreenName extends keyof AuthStackParamList> =
    NativeStackScreenProps<AuthStackParamList, ScreenName>;

/**
 * Color theme which extends default React Native Paper pallete type.
 * Contains custom colors.
 */
export interface Theme extends MD3Theme {
    /**
     * Padding for screen contents.
     */
    screenPadding: number;

    /**
     * Shadow used by all elements.
     */
    shadowPrimary: string;

    colors: MD3Colors & {
        form: string;

        /**
         * Use this color if you are unsure
         * which color from theme should be
         * used for primary font.
         */
        fontPrimary: string;

        /**
         * Use this color if you are unsure
         * which color from theme should be
         * used for secondary font.
         */
        fontSecondary: string;

        /**
         * Use this color if you are unsure
         * which color from theme should be
         * used for some inactive text.
         */
        fontInactive: string;

        // Colors for exercise levels
        beginner: string;
        onBeginner: string;
        intermediate: string;
        onIntermediate: string;
        expert: string;
        onExpert: string;
    };
}

/**
 * Style object used by react native StyleSheet namespace.
 */
export type StyleObject<T> = StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<T>;

/**
 * Function which grants access to theme,
 * used to return style object with theme variables applied.
 */
export type ThemedStyleFactory<T extends StyleObject<T>> = (theme: Theme) => T;

/**
 * Possible muscles targeted by an Exercise.
 */
export type ExerciseMuscle =
    | 'abdominals'
    | 'hamstrings'
    | 'calves'
    | 'shoulders'
    | 'adductors'
    | 'glutes'
    | 'quadriceps'
    | 'biceps'
    | 'forearms'
    | 'abductors'
    | 'triceps'
    | 'chest'
    | 'lower back'
    | 'traps'
    | 'middle back'
    | 'lats'
    | 'neck';

/**
 * Difficulty of an exercise.
 */
export type ExerciseLevel = 'beginner' | 'intermediate' | 'expert';

/**
 * Main force used while performing an Exercise.
 */
export type ExerciseForce = 'push' | 'pull' | 'static' | 'mixed';

/**
 * Main mechanic used while performing an Exercise.
 */
export type ExerciseMechanic = 'compound' | 'isolation' | 'mixed';

/**
 * Exercise from exercises database file.
 */
export interface PredefinedExercise {
    id: string;
    name: string;
    primaryMuscle: ExerciseMuscle;
    level: ExerciseLevel;
    force: ExerciseForce;
    mechanic: ExerciseMechanic;
    instructions: string[];
}

/**
 * Set of an exercise, containing results from previous workout.
 */
export interface WorkoutSet {
    id: string;
    exerciseId: string;
    setNumber: number;
    weight: number;
    reps: number;
}

/**
 * Particular exercise of workout.
 */
export interface WorkoutExercise {
    id: string;
    workoutId?: string;
    primaryMuscle: ExerciseMuscle;
    name: string;
    level: ExerciseLevel;
}

export interface TargetMuscle {
    muscleName: ExerciseMuscle;
    numberOfSets: number;
}

/**
 * User's performed workout.
 */
export interface Workout {
    id: string;
    userId: string;
    title: string;
    imageUrl: string | null;
    dateTimestamp: number;
    totalDuration: number;
    totalSets: number;
    totalVolume: number;
    targetMuscles: TargetMuscle[];
}

export interface DatabaseUser {
    id: string;
    username: string;
    password: string;
}

export interface WorkoutScreenExercise {
    id?: string;
    exercise: WorkoutExercise;
    rows: ExerciseTableRow[];
    restTimeSeconds: number | null;
}

export interface CurrentUser {
    id?: string;
    username?: string;
    workout?: {
        exercises?: WorkoutScreenExercise[];
        duration?: number;
        imageUri?: string;
        title?: string;
    };
}

export interface ExerciseTableRow {
    id?: string;
    setNumber: number;
    weight: number | null;
    weightPlaceholder: number;
    reps: number | null;
    repsPlaceholder: number;
    checked: boolean;
    prevWeight?: number;
    prevReps?: number;
}
