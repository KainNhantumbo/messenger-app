import moment from 'moment';

export const formatTime = (date: string): string => {
	return moment(date).format('LT')
};

export const formatRelativeTime = (date: string): string => {
	return moment(date).fromNow()
};

export const calendarTime = (date: string): string => {
	return moment(date).calendar()
};
