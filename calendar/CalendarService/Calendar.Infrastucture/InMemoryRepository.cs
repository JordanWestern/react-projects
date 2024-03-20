using Calendar.Domain.Models;
using Calendar.Domain.Repositories;

namespace Calendar.Infrastucture;

// TODO: real repository implementation
public class InMemoryRepository : ICalendarEventsRepository
{
    private readonly IList<CalendarEvent> _entities = new List<CalendarEvent>();

    public IEnumerable<CalendarEvent> GetCalendarEvents(DateOnly eventDate) =>
        _entities.Where(calendarEvent => calendarEvent.Date.MatchesMonthAndYear(eventDate));

    public void CreateCalendarEvent(CalendarEvent calendarEvent) => _entities.Add(calendarEvent);
}