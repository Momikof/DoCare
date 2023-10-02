import React from 'react';
import { View } from "react-native";
import { useIsCaregiverStore } from '../../stores/isCaregiver.store';
import { Text } from '@design-system';
import UrgentSVG from '@images/urgent.svg';
import ParticipantIcon from '../ParticipantIcon';
import { UserIcon } from '../UserIcon';
import { AssignToTaskButton } from './AssignToTaskButton';
import { ShareTaskButton } from './ShareTaskButton';

interface TaskProps {
    title: string;
    location: string;
    isUrgent: boolean;
    assignedUserId?: string;
}

export const Task: React.FC<TaskProps> = (props) => {
    const {title, location, isUrgent, assignedUserId} = props;
    const {isCaregiver} = useIsCaregiverStore();

    return (
        <>
            { isUrgent ? <UrgentSVG/> : <></> }
            <Text>{title}</Text>
            <Text>{location}</Text>
            <Text></Text>
            {
                assignedUserId ?
                <view>
                    <UserIcon userId={assignedUserId}/>
                </view> 
                :
                <view>
                    <AssignToTaskButton/>
                    {
                        isCaregiver ? 
                        <ShareTaskButton/>
                        :
                        <></>
                    }
                </view> 
            }
        </>
    );
}