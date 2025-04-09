from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models



class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(('El email es obligatorio'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    ROLE_CHOICES = [
        ('developer', 'Developer'),
        ('scrum_master', 'Scrum Master'),
        ('admin', 'Admin'),
        ('project_manager', 'Project Manager'),
        ('business_analyst', 'Business Analyst'),
        ('qa_engineer', 'QA Engineer'),
        ('ux_designer', 'UX Designer'),
        ('ui_designer', 'UI Designer'),
        ('devops_engineer', 'DevOps Engineer'),
        ('systems_architect', 'Systems Architect'),
        ('software_engineer', 'Software Engineer'),
        ('data_scientist', 'Data Scientist'),
        ('product_owner', 'Product Owner'),
        ('technical_writer', 'Technical Writer'),
        ('support_engineer', 'Support Engineer'),
        ('network_engineer', 'Network Engineer'),
        ('security_specialist', 'Security Specialist'),
        ('database_administrator', 'Database Administrator'),
        ('frontend_developer', 'Frontend Developer'),
        ('backend_developer', 'Backend Developer'),
        ('full_stack_developer', 'Full Stack Developer'),
        ('cloud_engineer', 'Cloud Engineer'),
    ]

    role = models.CharField(max_length=30, choices=ROLE_CHOICES, default='developer')
    team = models.ManyToManyField('Team', blank=True, related_name='user_teams')
    username = None
    email = models.EmailField(unique=True)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return f"{self.email}"
    
    
    class Meta:
        db_table = 'user'
        ordering = ['email']
        verbose_name = 'User'
        verbose_name_plural = 'Users'


class Team(models.Model):
    code = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    members = models.ManyToManyField(User, related_name='teams')
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = 'Team'
        verbose_name_plural = 'Teams'


class Project(models.Model):
    PROJECT_STATUS_CHOICES = [
        ('not_started', 'Not Started'),
        ('in_progress', 'In Progress'),
        ('on_hold', 'On Hold'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    team = models.ForeignKey('Team', on_delete=models.CASCADE, related_name='projects')
    lead = models.ForeignKey('User', on_delete=models.SET_NULL, null=True, blank=True, related_name='lead_projects')
    status = models.CharField(max_length=20, choices=PROJECT_STATUS_CHOICES, default='not_started')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'


class Daily(models.Model):
    date = models.DateField(auto_now_add=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='dailies')
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='created_dailies')

    class Meta:
        unique_together = ('date', 'team')
        ordering = ['-date']
        verbose_name = 'Daily'
        verbose_name_plural = 'Dailys'

    def __str__(self):
        return f'Daily {self.date} - {self.team.name}'


class DeveloperDaily(models.Model):
    daily = models.ForeignKey(Daily, on_delete=models.CASCADE, related_name='developer_entries')
    developer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='developer_dailies')
    notes = models.TextField(blank=True, null=True)  #Comentarios generales del dev

    class Meta:
        unique_together = ('daily', 'developer')
        verbose_name = 'DeveloperDaily'
        verbose_name_plural = 'DeveloperDailys'

    def __str__(self):
        return f'{self.developer.username} - {self.daily.date}'

        




class Task(models.Model):
    STATUS_CHOICES = [
        ('to_do', 'To Do'),
        ('in_progress', 'In Progress'),
        ('review', 'In Review'),
        ('blocked', 'Blocked'),
        ('done', 'Done'),
        ('deferred', 'Deferred'),
        ('cancelled', 'Cancelled'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    developer_daily = models.ForeignKey(DeveloperDaily, on_delete=models.CASCADE, related_name='tasks')
    project = models.ForeignKey('Project', on_delete=models.CASCADE, related_name='tasks')
    assigned_to = models.ForeignKey('User', on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_tasks')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='to_do')
    due_date = models.DateTimeField(blank=True, null=True)
    comments = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['due_date']
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'



class Impediment(models.Model):
    developer_daily = models.ForeignKey(DeveloperDaily, on_delete=models.CASCADE, related_name='impediments')
    description = models.TextField()

    STATUS_CHOICES = [
        ('open', 'Abierto'),
        ('in_progress', 'En proceso'),
        ('resolved', 'Resuelto'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')

    created_at = models.DateTimeField(auto_now_add=True)
    resolved_at = models.DateTimeField(blank=True, null=True)
    resolver = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True, related_name='resolved_impediments')

    def __str__(self):
        return f'Impedimento - {self.status} - {self.developer_daily.developer.username}'
    
    class Meta:
        verbose_name = 'Impediment'
        verbose_name_plural = 'Impediments'




### funcionalidades adicionales 

class WikiBook(models.Model):
    project = models.ForeignKey('Project', on_delete=models.CASCADE, related_name='wiki_books')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created_at']
        verbose_name = 'Wiki Book'
        verbose_name_plural = 'Wiki Books'


class WikiChapter(models.Model):
    book = models.ForeignKey('WikiBook', on_delete=models.CASCADE, related_name='chapters')
    title = models.CharField(max_length=200)
    order = models.PositiveIntegerField()  # Define el orden del capítulo en el libro
    content = models.TextField()
    parent_chapter = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='sub_chapters')

    class Meta:
        ordering = ['order']
        verbose_name = 'Wiki Chapter'
        verbose_name_plural = 'Wiki Chapters'




class Report(models.Model):
    REPORT_STATUS_CHOICES = [
        ('submitted', 'Submitted'),
        ('under_review', 'Under Review'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('resolved', 'Resolved'),
    ]

    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='user_reports')
    date = models.DateField()
    status = models.CharField(max_length=20, choices=REPORT_STATUS_CHOICES, default='submitted')
    tasks_completed = models.TextField(blank=True, null=True)
    issues_faced = models.TextField(blank=True, null=True)
    comments = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'Report for {self.user.username} on {self.date}'

    class Meta:
        ordering = ['date']
        verbose_name = 'Report'
        verbose_name_plural = 'Reports'


class Notification(models.Model):
    NOTIFICATION_STATUS_CHOICES = [
        ('unread', 'Unread'),
        ('read', 'Read'),
        ('archived', 'Archived'),
    ]

    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='user_notifications')
    message = models.TextField()
    status = models.CharField(max_length=20, choices=NOTIFICATION_STATUS_CHOICES, default='unread')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Notification for {self.user.username}'

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Notification'
        verbose_name_plural = 'Notifications'