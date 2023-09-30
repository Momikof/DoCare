import React from 'react';
import { View } from "react-native";
import { useIsCaregiverStore } from '../../stores/isCaregiver.store';
import { Text } from '@design-system';
import UrgentSVG from '@images/urgent.svg';
import ParticipantIcon from '../ParticipantIcon';

interface TaskProps {
    title: string;
    location: string;
    isUrgent: boolean;
    assignedId?: string;
}

export const Task: React.FC<TaskProps> = (props) => {
    const {title, location, isUrgent, assignedId} = props;
    //const {isCaregiver} = useIsCaregiverStore();

    return (
        <>
            { isUrgent ? <UrgentSVG/> : <></> }
            <Text>{title}</Text>
            <Text>{location}</Text>
            <Text></Text>
            {
               // assignedId ? <ParticipantIcon/> : ""
            }
            
        </>
    );
}