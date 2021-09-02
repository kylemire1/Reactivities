using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
  public class List
  {
    public class Query : IRequest<Result<List<Activity>>> { }

    public class Handler : IRequestHandler<Query, Result<List<Activity>>>
    {
      public DataContext _context;
      private readonly ILogger _logger;
      // Add logger if needed
      // public Handler(DataContext context, ILogger<List> logger)
      public Handler(DataContext context, ILogger<List> logger)
      {
        _logger = logger;
        _context = context;
      }

      public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
      {
        // How to use cancellation token
        // try
        // {
        //   for (var i = 0; i < 10; i++)
        //   {
        //     cancellationToken.ThrowIfCancellationRequested();
        //     await Task.Delay(1000, cancellationToken);
        //     _logger.LogInformation($"Task {i} has completed");
        //   }
        // }
        // catch (System.Exception ex) when (ex is TaskCanceledException)
        // {
        //   _logger.LogInformation("Task was cancelled");
        // }
        return Result<List<Activity>>.Success(await _context.Activities.ToListAsync(cancellationToken));
      }
    }
  }
}