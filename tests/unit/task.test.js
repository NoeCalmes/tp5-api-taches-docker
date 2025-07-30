const { Task } = require('../../src/models/task');

describe('Task Model', () => {
  describe('create', () => {
    it('should create a task with valid data', () => {
      const taskData = {
        description: 'Test task description',
        status: 'à faire'
      };

      const task = Task.build(taskData);

      expect(task.description).toBe(taskData.description);
      expect(task.status).toBe(taskData.status);
      expect(task.id).toBeDefined();
    });

    it('should create a task with minimal data', () => {
      const taskData = {
        description: 'Test description'
      };

      const task = Task.build(taskData);

      expect(task.description).toBe(taskData.description);
      expect(task.status).toBeUndefined();
      expect(task.id).toBeDefined();
    });

    it('should handle empty data', () => {
      const task = Task.build({});

      expect(task.description).toBeUndefined();
      expect(task.status).toBeUndefined();
      expect(task.id).toBeDefined();
    });
  });

  describe('validation', () => {
    it('should accept valid description', () => {
      const task = Task.build({
        description: 'Valid description'
      });

      expect(task.description).toBe('Valid description');
    });

    it('should accept valid status', () => {
      const task = Task.build({
        status: 'en cours'
      });

      expect(task.status).toBe('en cours');
    });
  });
});
