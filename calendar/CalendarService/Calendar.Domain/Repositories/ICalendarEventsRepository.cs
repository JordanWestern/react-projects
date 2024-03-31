using Calendar.Domain.Models;

namespace Calendar.Domain.Repositories;

public interface ICalendarEventsRepository
{
    public IEnumerable<CalendarEvent> GetCalendarEvents(DateOnly eventDate);


    public void CreateCalendarEvent(CalendarEvent calendarEvent);

    public CalendarEvent? GetCalendarEvent(string id);
}