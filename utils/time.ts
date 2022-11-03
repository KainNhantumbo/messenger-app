import moment from 'moment';

export const formatTime = (date: string): string => {
  return moment(date).format('LT');
};

export const formatDate = (time: string, format_string: string): string => {
  const date = moment(time).format(format_string);
  return date;
};

export const formatRelativeTime = (date: string): string => {
  return moment(date).fromNow();
};

export const calendarTime = (date: string): string => {
  return moment(date).calendar();
};

