import { add } from 'date-fns';

export const filterTicketSegmentPart = (segmentPart) => {
  const destination = `${segmentPart.origin} - ${segmentPart.destination}`;

  let countTransfers;
  if (segmentPart.stops.length >= 5) countTransfers = `${segmentPart.stops.length} пересадок`;
  else if (segmentPart.stops.length < 5 && segmentPart.stops.length > 1)
    countTransfers = `${segmentPart.stops.length} пересадки`;
  else if (segmentPart.stops.length === 1) countTransfers = `${segmentPart.stops.length} пересадка`;
  else countTransfers = 'пересадок нет';

  const transfers = `${segmentPart.stops.join(', ')}`;

  const dateStart = new Date(segmentPart.date);
  const dateEnd = add(dateStart, { minutes: segmentPart.duration });

  const dateStartHours = dateStart.getHours() < 10 ? `0${dateStart.getHours()}` : dateStart.getHours();
  const dateStartMinutes = dateStart.getMinutes() < 10 ? `0${dateStart.getMinutes()}` : dateStart.getMinutes();

  const dateEndHours = dateEnd.getHours() < 10 ? `0${dateEnd.getHours()}` : dateEnd.getHours();
  const dateEndMinutes = dateEnd.getMinutes() < 10 ? `0${dateEnd.getMinutes()}` : dateEnd.getMinutes();

  const dateSchedule = `${dateStartHours}:${dateStartMinutes} - ${dateEndHours}:${dateEndMinutes}`;

  const durationHours = Math.floor(segmentPart.duration / 60);
  const durationMinutes = segmentPart.duration - durationHours * 60;
  const duration = `${durationHours}ч ${durationMinutes}м`;

  return { destination, countTransfers, transfers, dateSchedule, duration };
};
