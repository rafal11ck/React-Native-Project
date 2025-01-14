import { View, Image, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Button, Card, Dialog, Icon, Text } from 'react-native-paper';
import { Workout } from 'src/types';

export default function RecentWorkoutCard({ workout }: { workout: Workout }) {
    const [currentWorkout, setCurrentWorkout] = useState(workout);
    const convertedDate = new Date(currentWorkout.dateTimestamp);
    const formattedDate = `${convertedDate.getFullYear()}-${(convertedDate.getMonth() + 1).toString().padStart(2, '0')}-${convertedDate.getDate().toString().padStart(2, '0')}`;

    const timeIcon = require('@assets/icons/time.png');
    const setsIcon = require('@assets/icons/set.png');
    const volumeIcon = require('@assets/icons/volume.png');
    const optionsIcon = require('@assets/icons/options.png');
    const editIcon = require('@assets/icons/edit.png');
    const deleteIcon = require('@assets/icons/cross.png');
    const backIcon = require('@assets/icons/back.png');

    // #region WORKOUT EDIT OR DELETE MODAL SECTION ///////////////////////////////////////////
    const [dialogVisible, setDialogVisible] = useState(false);

    //TO DO: implement these functions
    const handleDetailsWorkout = () => {
        console.log('Workout Details');
        setDialogVisible(false);
    };

    const handleEditWorkout = () => {
        console.log('Workout edit');
        setDialogVisible(false);
    };

    const handleDeleteWorkout = () => {
        console.log('Workout deleted');
        setDialogVisible(false);
    };

    // #endregion ////////////////////////////////////////////////////////////////////////////

    return (
        <Card style={{ padding: 15, margin: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Card.Content>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'black'
                        }}
                    >
                        {currentWorkout.title}
                    </Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </Card.Content>
                <Card.Actions>
                    {dialogVisible ? (
                        <Pressable onPress={() => setDialogVisible(false)}>
                            <Image source={backIcon} style={{ width: 24, height: 24 }} />
                        </Pressable>
                    ) : (
                        <Pressable onPress={() => setDialogVisible(true)}>
                            <Image source={optionsIcon} style={{ width: 24, height: 24 }} />
                        </Pressable>
                    )}
                </Card.Actions>
            </View>
            {dialogVisible ? (
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.workoutEdit}>
                        <Icon source={optionsIcon} size={25} />
                        <Icon source={editIcon} size={25} />
                        <Icon source={deleteIcon} size={25} color='red' />
                    </View>
                    <View style={styles.workoutEdit}>
                        <Pressable onPress={handleDetailsWorkout}>
                            <Text style={{ fontSize: 18 }}>Workout Details</Text>
                        </Pressable>
                        <Pressable onPress={handleEditWorkout}>
                            <Text style={{ fontSize: 18 }}>Edit workout</Text>
                        </Pressable>
                        <Pressable onPress={handleDeleteWorkout}>
                            <Text style={{ fontSize: 18, color: 'red' }}>Delete workout</Text>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={styles.dataDescView}>
                            <Icon source={timeIcon} size={20} />
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Time</Text>
                                <Text style={styles.date}>
                                    {currentWorkout.totalDuration / 60} min
                                </Text>
                            </View>
                        </View>
                        <View style={styles.dataDescView}>
                            <Icon source={setsIcon} size={22} />
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Sets</Text>
                                <Text style={styles.date}>{currentWorkout.totalSets}</Text>
                            </View>
                        </View>
                        <View style={styles.dataDescView}>
                            <Icon source={volumeIcon} size={20} />
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Volume</Text>
                                <Text style={styles.date}>{currentWorkout.totalVolume} kg</Text>
                            </View>
                        </View>
                    </View>

                    <Card.Content style={{ gap: 15 }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Target Muscles</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            {currentWorkout.targetMuscles.map((muscle, index) => (
                                <Text key={index} style={styles.targetMuscles}>
                                    {muscle.muscleName}
                                </Text>
                            ))}
                        </View>
                    </Card.Content>
                </>
            )}
        </Card>
    );
}

const styles = StyleSheet.create({
    date: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'grey'
    },
    targetMuscles: {
        backgroundColor: 'black',
        color: '#fff',
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 2,
        paddingBottom: 3,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 12
    },
    dataDescView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 10
    },
    workoutEdit: {
        gap: 15,
        padding: 10
    }
});
