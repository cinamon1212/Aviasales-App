export const sortAllTickets = (tickets, filter, transfers) => {
  let copyArray = [...tickets];
  if (filter === 'Самый дешевый') {
    copyArray = copyArray.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (filter === 'Самый быстрый') {
    copyArray = copyArray.sort((a, b) =>
      a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1,
    );
  }

  const sortForTransfersCount = (transfersCount) => {
    return (copyArray = copyArray.filter(
      (ticket) =>
        ticket.segments[0].stops.length === transfersCount && ticket.segments[1].stops.length === transfersCount,
    ));
  };

  if (transfers.length === 0) return copyArray;
  else if (transfers.length === 1) {
    if (transfers[0] === 'Без пересадок') return sortForTransfersCount(0);
    else {
      const transferCount = Number(transfers[0][0]);
      return sortForTransfersCount(transferCount);
    }
  } else {
    return (copyArray = copyArray.filter((ticket) => {
      let countTransfers = [];
      if (transfers.includes('Без пересадок')) countTransfers.push(0);
      if (transfers.includes('1 пересадка')) countTransfers.push(1);
      if (transfers.includes('2 пересадки')) countTransfers.push(2);
      if (transfers.includes('3 пересадки')) countTransfers.push(3);

      const firstStops = ticket.segments[0].stops.length;
      const secondStops = ticket.segments[1].stops.length;

      if (countTransfers.includes(firstStops) && countTransfers.includes(secondStops)) return true;
      else return false;
    }));
  }
};
