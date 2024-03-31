using Calendar.Domain.Models;

namespace Calendar.Domain.Repositories;

public interface ICalendarEventsRepository
{
    public IEnumerable<CalendarEvent> GetCalendarEvents(int year, int month);


    public void CreateCalendarEvent(CalendarEvent calendarEvent);
}