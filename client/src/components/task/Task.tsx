import React from 'react';
import { View } from "react-native";

interface TaskProps {
    title: string;
    location: string;
    isUrgent: boolean;
    assignedId?: string;
}

export const Task: React.FC<TaskProps> = (props) => {
    const {title, location, isUrgent, assignedId} = props;

    return (
        <>
            <View>
                
            </View>
        </>
    );
}